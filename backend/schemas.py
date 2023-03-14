from pydantic import BaseModel, Field
from typing import Optional


class Product(BaseModel):
    product_name: str = Field(min_length=1, max_length=100)
    description: str = Field(min_lenght=1, max_length=1000)
    quantity: int = Field(min=0)

class User(BaseModel):
    username: str = Field(min_length=1, max_length=100)
    emails: str = Field(min_lenght=1, max_length=1000)
    password: str = Field(min=0)
    full_names: str
    disabled: bool

    class Config:
        orm_mode = True
