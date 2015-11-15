while true
do
	date
	inotifywait -e close_write -rq src/
	java -jar WebDev.jar "src/master.xml"
	clear
done
