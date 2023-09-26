## Python令牌桶代码


```python
import threading
import time


class TokenBucket:
    def __init__(self, tpm, timeout=None):
        self.capacity = int(tpm)  # 令牌桶容量
        self.tokens = 0  # 初始令牌数为0
        self.rate = int(tpm) / 60  # 令牌每秒生成速率
        self.timeout = timeout  # 等待令牌超时时间
        self.cond = threading.Condition()  # 条件变量
        self.is_running = True
        # 开启令牌生成线程
        threading.Thread(target=self._generate_tokens).start()

    def _generate_tokens(self):
        """生成令牌"""
        while self.is_running:
            with self.cond:
                if self.tokens < self.capacity:
                    self.tokens += 1
                self.cond.notify()  # 通知获取令牌的线程
            time.sleep(1 / self.rate)

    def get_token(self):
        """获取令牌"""
        with self.cond:
            while self.tokens <= 0:
                flag = self.cond.wait(self.timeout)
                if not flag:  # 超时
                    return False
            self.tokens -= 1
        return True

    def close(self):
        self.is_running = False


if __name__ == "__main__":
    token_bucket = TokenBucket(20, None)  # 创建一个每分钟生产20个tokens的令牌桶
    # token_bucket = TokenBucket(20, 0.1)
    for i in range(3):
        if token_bucket.get_token():
            print(f"第{i+1}次请求成功")
    token_bucket.close()
```

:::note
`with self.cond:`

这是使用 `with` 语句与 `self.cond` (即一个 `threading.Condition` 对象) 的上下文管理功能。在这个上下文中，与 `self.cond` 相关的锁被自动获取，并在上下文结束时自动释放。

为什么要使用这种上下文管理功能？原因是在多线程环境中，当多个线程可能同时访问或修改同一个资源（在这种情况下是 `self.tokens`）时，你需要确保每次只有一个线程可以操作该资源。这称为线程同步。使用锁（在这种情况下是条件变量内部的锁）是实现线程同步的一种常见方法。

`threading.Condition` 对象提供了一个锁，你可以通过调用 `acquire()` 和 `release()` 方法来手动获取和释放，但使用 `with` 语句更加简洁和易于管理。当你进入 with 块时，锁被自动获取，当你离开这个块时，锁被自动释放。

这样确保了在 `with self.cond`: 块中的代码是线程安全的，并确保了与此相关的其他线程（可能正在等待令牌或试图修改令牌数量）不会与当前线程发生冲突。

总之，第四点通过使用 `with` 语句和 `threading.Condition` 对象为 `self.tokens` 的修改和访问提供了线程同步机制，确保了在多线程环境中的正确性和安全性。
:::

:::note
`flag = self.cond.wait(self.timeout)`

这里，当前线程将在此处等待，直到另一个线程调用 `self.cond.notify()` （例如，当令牌生成线程生成了一个新的令牌时）。如果设置了 `self.timeout`（超时时间），那么线程会等待这段时间。如果在这段时间内收到通知，`wait` 返回 `True`，否则返回 `False`。
:::