while true
do
    echo "Waiting for change to file..."
    inotifywait --quiet --recursive --event close_write src
    java -jar WebDev.jar src/master.xml
    sleep 2s
    clear
done