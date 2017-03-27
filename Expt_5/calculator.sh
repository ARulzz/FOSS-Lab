#!/bin/sh
#'Experiment 5'
#'---------------'
y=0
while [ "$y" -eq 0 ]
do
	echo "a = "
	read a
	echo "b = "
	read b
	x=0
	while [ "$x" -eq 0 ]
	do
		echo "1. a + b"
		echo "2. a - b"
		echo "3. a * b"
		echo "4. a / b"
		echo "5. a % b"
		read e
		if [ "$e" -eq 1 ]
		then
			c=$(expr "$a" + "$b")
			echo "Sum: $c"
		elif [ "$e" -eq 2 ] 
		then
			c=$(expr "$a" - "$b")
			echo "Difference: $c" 
		elif [ "$e" -eq 3 ]
		then
			c=$(expr "$a" \* "$b")
			echo "Product: $c"
		elif [ "$e" -eq 4 ]
		then
			c=$(expr "$a" / "$b")
			echo "Quotient: $c"
		elif [ "$e" -eq 5 ]
		then
			c=$(expr "$a" % "$b")
			echo "Remainder: $c"
		else
			echo "Invalid operation selected"
		fi
		echo "Press 0 to continue"
		echo "Press 1 to exit"
		read x
	done
	echo "Press 0 to continue"
	echo "Press 1 to exit"
	read y
done
