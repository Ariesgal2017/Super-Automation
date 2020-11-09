@ECHO OFF
py -m pip --upgrade pip
pip install -e . --upgrade --no-cache-dir --progress-bar off
zahed install chrome -l
zahed install gecko -l
zahed install edge -l
zahed install ie -l
zahed install opera -l
