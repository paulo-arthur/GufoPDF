from turtle import *
import turtle
from turtle import Screen, Turtle
from random import randint

def normalize_color(c):
    return (c[0]/256, c[1]/256, c[2]/256)

FIRST_COLOR = [randint(100, 200), randint(100, 200), randint(100, 200)]

MAX_CHANNEL = FIRST_COLOR.index(max(FIRST_COLOR))
SECOND_COLOR = []

for _ in FIRST_COLOR:
    if _ != FIRST_COLOR[MAX_CHANNEL]:
        SECOND_COLOR.append(_ / 2)
    else:
        SECOND_COLOR.append(_)

FIRST_COLOR = normalize_color(FIRST_COLOR)
SECOND_COLOR = normalize_color(SECOND_COLOR)

turtle.title("Python Guides")
tur = Screen()
tur.tracer(False)

width, height = tur.window_width(), tur.window_height()

deltas = [(hue - FIRST_COLOR[index]) / height for index, hue in enumerate(SECOND_COLOR)]

turt = Turtle()
turt.color(FIRST_COLOR)

turt.penup()
turt.goto(-width/2, height/2)
turt.pendown()

direct = 1

for distance, y in enumerate(range(height//2, -height//2, -1)):

    turt.forward(width * direct)
    turt.color([FIRST_COLOR[i] + delta * distance for i, delta in enumerate(deltas)])
    turt.sety(y)

    direct *= -1

tur.tracer(True)
tur.exitonclick()
