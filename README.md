<H1> Task 1 </H1> 
<H3> Components </H3>

<h3> Part 1: </h3>

<ol>
<li>Create a new Angular application from CLI.</li>
<li>From the CLI, create a component Counter that has one property counterLocalValue=0.</li>
<li>Display the Counter component as a direct child to AppComponent.</li>
<li>The Counter component template should display the 
counterLocalValue property and have two buttons, when the user clicks 
on "-" or "+" buttons the counterLocalValue should decrease/increase.</li>
<li>You should pass the initial value of counterLocalValue from the parent component.</li>
<li>Emit the counter value on each change and display it in the parent component.</li>
</ol>
Part 2:
<ol>
<li>Define properties in the counter component to specify the limits of the 
counter value. Name them minValue=2 and maxValue=7.</li>
<li>You should pass the initial values for these from the parent component.</li>
<li>When the counter value is less than minValue, counterLocalValue should be 
colored yellow.</li>
<li>When the counter value exceeds maxValue, counterLocalValue should be 
colored red.</li>
<li>When the counter value is between minValue and maxValue (inclusive), 
counterLocalValue should be colored green.</li>
</ol>
<img src="TASK_1_PIC">

<h3> Part 3: </h3>
<ol>
<li>Create a pipe that takes a string value and one optional parameter.</li>
<li>If the passed parameter is uppercase convert the string to uppercase.</li>
<li>If the passed parameter is lowercase convert the string to lowercase.</li>
<li>If no parameter is passed, don’t do anything to the value.</li>
</ol>
