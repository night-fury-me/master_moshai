from flask import Flask, request, render_template, jsonify
import json

app = Flask(__name__, static_url_path='/static')

#from commons import get_relation, get_ner
#from inference import get_flower_name

@app.route('/', methods=['GET', 'POST'])

def start():

	if request.method == 'GET':
		return render_template('index.html', value='hi')

	if request.method == 'POST':
		sent = request.form['sentence']
		value = request.form['fired_button']

		if value == "bohunirbachoni":
			return jsonify({'data': 'has_a'})
		# 	res = get_relation(sent)
		elif value == "shotto-mittha":
			return jsonify({'data': 'বিদ্যালয়টি'})	
		# 	res = get_ner(sent)
		else:
			return jsonify({'data': 'বিদ্যালয়টি'})
		# 	res = get_ner(sent)

		# return jsonify({'data': sent})

if app.config["DEBUG"]:
    @app.after_request
    def after_request(response):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
        response.headers["Expires"] = 0
        response.headers["Pragma"] = "no-cache"
        return response

if __name__ == '__main__':
	app.run(debug=False)