import sqlalchemy
import pandas as pd
import datetime as dt

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template


#create the engine
engine=create_engine("sqlite:///Project2.sqlite")

#refect
Base=automap_base()
Base.prepare(engine, reflect=True)

Pokemon=Base.classes.pokemon
Location=Base.classes.location

#session
session=Session(engine)
app=Flask(__name__)

#Flask Routing
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/Pokemon")
def Pokemon():
    return render_template("sweet16.html")

@app.route("/Location")
def Location():
    return render_template("map.html")

@app.route("/jsChart")
def Frequency():
    return render_template("marker.html")
    

if __name__=="__index__":
    app.run()