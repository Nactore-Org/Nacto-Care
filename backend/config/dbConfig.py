from configparser import ConfigParser
from pathlib import Path
import os

path = Path(__file__)
dir_path = path.parent.absolute()


class Config(object):
    def __init__(self) -> None:
        env = os.environ.get("APP_ENV")
        config = self.getConfig(env)
        self.DB_HOST = config["DB_HOST"]
        self.DB_USERNAME = config["DB_USERNAME"]
        self.DB_PASSWORD = config["DB_PASSWORD"]
        self.DB_NAME = config["DB_NAME"]
        self.JWT_SECRET = config["JWT_SECRET"]

    def getConfig(self, env: str):
        config_parser = ConfigParser()
        config_parser.read(os.path.join(dir_path, f"{env}.ini"))
        return config_parser["config"]
