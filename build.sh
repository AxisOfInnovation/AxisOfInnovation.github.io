watchmedo shell-command \
  	--patterns="*.css;*.page;*.frag" \
   	--recursive \
   	--command="java -jar webdev.jar src/master.xml" \
   	.