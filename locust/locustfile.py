import time, random
from locust import HttpUser, task, between, tag

class QuickstartUser(HttpUser):
    wait_time = between(1,2)

    @tag('node')
    @tag('sha')
    @task
    def sha256(self):
        self.client.post("/nodejs/sha256", json={'n1':'25','n2':'45'})
    
    @tag('node')
    @tag('write')
    @task
    def write_node(self):
        self.client.get("/nodejs/write?lineNumber=14")

    @tag('go')
    @tag('sha')
    @task
    def sha256_go(self):
        self.client.post("/go/sha256", json={"n1": "25","n2":"45"})

    @tag('go')
    @tag('write')
    @task
    def write_go(self):
        self.client.get("/go/write?lineNumber=14")
