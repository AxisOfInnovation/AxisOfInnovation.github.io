while true
do
	date
	inotifywait -e CLOSE_WRITE -r -q src/
	java -jar WebDev.jar "src/master.xml"
	clear
done
