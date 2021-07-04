### github-action cicd-book

-   需要把本机公钥 `id_rsa.pub` >> 宿主机的 `authorized_keys`，将私钥 `id_rsa` > github 的 `id_rsa`
-   必须提前构建 server 镜像，才可以在 `compose` 中运行 `Dockerfile`
