@ECHO OFF
python setup.py install
pip install -r requirements.txt
py -m pip install virtualenvwrapper-win --force-reinstall --user
py -m pip --upgrade pip
pip install -e . --upgrade --no-cache-dir --progress-bar off
py -m venv venv
call venv\\Scripts\\activate
python setup.py install
pip install -r requirements.txt
zahed install chrome -l
zahed install gecko -l
zahed install edge -l
zahed install ie -l
zahed install opera -l
