# -*- coding: utf-8 -*-
"""
Created on Fri Apr 19 07:13:44 2019

@author: Bhargava
"""

from flask import Flask,render_template,url_for,request
from flask_bootstrap import Bootstrap 
import pandas as pd 
import numpy as np 

# ML Packages
from sklearn.externals import joblib


app = Flask(__name__)
Bootstrap(app)


@app.route('/')
def index():
	return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    clf = joblib.load('model.pkl')

    # Receives the input query from form
    if request.method == 'POST':
        namequery = request.form['namequery']
        f = namequery
        data = pd.read_csv(f,sep = ';')
        data = data.fillna(method='ffill', axis=0).fillna(0)
        my_prediction = clf.predict(data)
    return render_template('results.html',prediction = my_prediction,name = namequery.upper())

if __name__ == '__main__':
	app.run(port=5002,debug=True)