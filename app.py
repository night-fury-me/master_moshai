from flask import Flask, request, render_template
app = Flask(__name__)

from commons import get_tensor
from inference import get_flower_name

@app.route('/', methods=['GET', 'POST'])
def hello_world():
	if request.method == 'GET':
		return render_template('index.html', value='hi')
	if request.method == 'POST':
		return render_template('result.html', value='bye')



@app.route('/hello', methods = ['GET', 'POST'])
def hello_mia():
	if request.method == 'GET':
		return render_template('lol.html', value={
			'a' : 'sabik',
			'b' : 'redw'
		})
	if request.method == 'POST':
		return render_template('result.html', value='bye')



if __name__ == '__main__':
	app.run(debug=True)