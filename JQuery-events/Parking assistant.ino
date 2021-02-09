#include <Wire.h> // this library is mandatory in order to use LiquidCrystal_I2C.h
#include <LiquidCrystal_I2C.h> // the library for the I2C LCD, I chose to use this LCD because it occupies just 2 pins from the arduino A4 and A5 and another 2 pins for VCC and GND
LiquidCrystal_I2C lcd(0x27,2,1,0,4,5,6,7,3, POSITIVE); // The pins allocation for the I2C LCD and the first parameter is the address
#include "pitches.h" // a file which contains the notes for the music

// Two things need to be created: the array for the notes of the melody (in order)
// and the duration of each (think of it like sheet music in two parts)

// The melody array. You can find a link to it in the documentation
int melody[] = {
  NOTE_FS5, NOTE_FS5, NOTE_D5, NOTE_B4, NOTE_B4, NOTE_E5, 
  NOTE_E5, NOTE_E5, NOTE_GS5, NOTE_GS5, NOTE_A5, NOTE_B5, 
  NOTE_A5, NOTE_A5, NOTE_A5, NOTE_E5, NOTE_D5, NOTE_FS5, 
  NOTE_FS5, NOTE_FS5, NOTE_E5, NOTE_E5, NOTE_FS5, NOTE_E5
};

// The note duration, 8 = 8th note, 4 = quarter note, etc.
int durations[] = { // The duration for the chosen melody can also be found in the same link.
  8, 8, 8, 4, 4, 4, 
  4, 5, 8, 8, 8, 8, 
  8, 8, 8, 4, 4, 4, 
  4, 5, 8, 8, 8, 8
};

// determine the length of the arrays to use in the loop iteration
int songLength = sizeof(melody)/sizeof(melody[0]);
// assign the pins
const int trigLeft = 10, trigRight = 6, echoLeft = 9, echoRight = 5, greenLeft = 11, yellowLeft = 12, redLeft = 13, greenRight = 2, yellowRight = 3, redRight = 4, buzzerPin = 8, resetPin = 7;

// I need two variables to store the distance for the back-left sensor and for the back-right sensor
int distanceLeft, distanceRight;

// I also need two variables to store the durations for the calculation of the distances with the formula found in the documentation
int durationLeft, durationRight;

// The limits for the parking assistant
int distanceMin = 12, distanceAv = 20 , distanceMax = 40;
// The frequency for the tone (I tried to find the least annoying one).
int frequency = 3500;

// The tolerance for the parked position
int tolerance = 2;
// Some variables to store the current state in order to control some LCD prints and LEDs
bool parked = true, parking = false;
// print function 
void printLcd(char* firstRow, char* secondRow){
    lcd.clear(); // clear everything that was printed before
    lcd.setCursor(0,0); // set the cursor on the first column, first line
    lcd.print(firstRow);
    lcd.setCursor(0,1); // set the cursor on the first column, second line
    lcd.print(secondRow);
}

// led state function
void turnLeds(int state){
     digitalWrite(greenLeft, state);
     digitalWrite(greenRight, state);
     digitalWrite(yellowLeft, state);
     digitalWrite(yellowRight, state);
     digitalWrite(redLeft, state);
     digitalWrite(redRight, state);  
}

void setup() {
  Serial.begin(9600); // begin the communication with the serial monitor at 9600 Baud
  lcd.begin(16, 2); // 16x2 LCD                   
  pinMode(trigLeft, OUTPUT); // trigger for the left sensor
  pinMode(trigRight, OUTPUT); // trigger for the right sensor
  pinMode(echoLeft, INPUT); // echo for the left sensor (which is an input and is used to receive the ultrasonic wave)
  pinMode(echoRight, INPUT);  // echo for the right sensor
  // LED pins 
  pinMode(greenLeft, OUTPUT); 
  pinMode(yellowLeft, OUTPUT);
  pinMode(redLeft, OUTPUT);
  pinMode(greenRight, OUTPUT);
  pinMode(yellowRight, OUTPUT);
  pinMode(redRight, OUTPUT);
  // Buzzer pin
  pinMode(buzzerPin, OUTPUT);
  // Button for resetting the assistant
  pinMode(resetPin, INPUT);
}

void loop() {
    if(parked == true && parking == false){
        printLcd("PRESS THE BUTTON", "TO START...");
        Serial.println("PRESS THE BUTTON TO START...");
        parking = true;
    }
    if(digitalRead(resetPin) == HIGH){ // Button control of the application, first it is a START button and after that it is a RESET button
        Serial.println("The parking assistant is about to start");
        printLcd("THE PARKING IS", "ABOUT TO START");
        parked = false; // make sure it is not printing when the car is parking
        delay(2000); 
    }
    if(parked == false){
        digitalWrite(trigLeft, LOW); // emmit the 0
        delayMicroseconds(2); // set the duration, I chose 2 because it seemed to work better that way

        digitalWrite(trigLeft, HIGH); // emmit the 1
        delayMicroseconds(10); // set the duration, therefore we have a 80% duty cycle
        digitalWrite(trigLeft, LOW); // 

        durationLeft= pulseIn(echoLeft, HIGH); // store the duration of the received signal
        distanceLeft= durationLeft*0.0342/2; // transform it into distance knowing the speed of sound

        // the same for the right side
        digitalWrite(trigRight, LOW);
        delayMicroseconds(2);

        digitalWrite(trigRight, HIGH);
        delayMicroseconds(10);
        digitalWrite(trigRight, LOW);

        durationRight= pulseIn(echoRight, HIGH);
        distanceRight= durationRight*0.0342/2;

    
    if(distanceLeft < distanceMax){ // If the distance received by the left sensor is in the allowed range (set previously above) 
       digitalWrite(greenLeft, HIGH); // then turn on the green LED to let the user know he is in the first distance criterion
       if(distanceLeft < distanceRight && distanceLeft > distanceAv){ // and if also the distance left is smaller than the distance received by the right sensor
          tone(buzzerPin,frequency, 500); // then we make the buzzer sound slowly
          delay(1500);
          noTone(buzzerPin);
          printLcd("TURN RIGHT", "A LITTLE."); // and tell the user to turn in the other direction a little
       } 
    }
    else{
       noTone(buzzerPin); // if not then stop the buzzer
       digitalWrite(greenLeft, LOW); // and turn off the LED
       if(distanceRight > distanceMax){ // if both distances are not in the allowed range, just go straight 
          lcd.clear();
          lcd.setCursor(1,0);
          lcd.print("GO STRAIGHT!");
       }
    }
    if(distanceLeft < distanceAv){ // if the distance from the left sensor is in the other criterion (Average)
       digitalWrite(yellowLeft, HIGH); // then light the yellow LED
       if(distanceLeft < distanceRight && distanceLeft > distanceMin){  // if it is also smaller than the distance from the right sensor and bigger than the other critical distance (distanceMin)
          tone(buzzerPin,frequency, 500); // then we make the buzzer sound a little faster
          delay(850); 
          noTone(buzzerPin);
          printLcd("TURN RIGHT A", "LITTLE BIT MORE!"); // and tell the user to turn in the other direction a little more
       }
    }
    else{
       digitalWrite(yellowLeft, LOW); // if not then turn off the LED
    }
    if(distanceLeft < distanceMin){ // and the last critical distance
       digitalWrite(redLeft, HIGH); // if it reaches it, then turn the RED LED on
       if(distanceLeft < distanceRight){ // if this distance is smaller than the right one
          tone(buzzerPin,frequency, 500); // then make the buzzer sound rapidly
          delay(500);
          noTone(buzzerPin);
          printLcd("KEEP TURNING", "RIGHT!"); // and tell the user to keep turning in the other direction
       } 
    }
    else{
       digitalWrite(redLeft, LOW); // if not then turn the LED off
    }
  // EXACTLY THE SAME EXPLANATION FOR THE RIGHT SENSOR PARAMETERS
  // THE RIGHT SENSOR
    if(distanceRight < distanceMax){
       digitalWrite(greenRight, HIGH);
       if(distanceRight < distanceLeft && distanceRight > distanceAv){
          tone(buzzerPin, frequency, 500);
          delay(1500);
          noTone(buzzerPin);
          printLcd("TURN LEFT", "A LITTLE");
       }    
    }
    else{
       noTone(buzzerPin);
       digitalWrite(greenRight, LOW);
       if(distanceLeft > distanceMax){
        printLcd("GO STRAIGHT!", "");
       }
    }
    if(distanceRight < distanceAv){
       digitalWrite(yellowRight, HIGH);
       if(distanceRight < distanceLeft && distanceRight > distanceMin){
          tone(buzzerPin, frequency, 500);
          delay(850);
          noTone(buzzerPin);
          printLcd("TURN LEFT A", "LITTLE BIT MORE!"); 
       }
    }
    else{
       digitalWrite(yellowRight, LOW);
    }
    if(distanceRight < distanceMin){
       digitalWrite(redRight, HIGH);
       if(distanceRight < distanceLeft){
          tone(buzzerPin, frequency, 500);
          delay(500);
          noTone(buzzerPin);
          printLcd("KEEP TURNING", "LEFT!");
       } 
    }
    else{
       digitalWrite(redRight, LOW);
    }
    // see if the difference in distance between the two sensors is in the tolerance region (trying to make the car positioned as straight as possible)
    if(abs(distanceLeft-distanceRight) < tolerance){
        lcd.clear();
        lcd.setCursor(1,0);
        lcd.print("GO STRAIGHT");  // Tell the user to keep going straight
    }
    if(distanceRight < 6 && distanceLeft < 6){ // Check if the distances are both less than a certain distance
        printLcd("IT IS ENOUGH!", "YOU ARE PARKED"); // if so we announce the user that he parked correctly
        Serial.println("You have parked successfully!"); 
        noTone(buzzerPin); // stop the buzzer sound
        for (int thisNote = 0; thisNote < songLength; thisNote++){
        // determine the duration of the notes that the computer understands
        // divide 1000 by the value, so the first note lasts for 1000/8 milliseconds
        int duration = 1000/ durations[thisNote];
        tone(buzzerPin, melody[thisNote], duration); //play some music to congratulate the user
        // pause between notes
        int pause = duration * 1.5; // the pause between the notes
        delay(pause);
        }
        // now stop the buzzer sound
        noTone(buzzerPin);
        parked = true; // the state changes to parked
        parking = false; // while the parking state becomes false
        // make a little LED animation to congratulate the user
        turnLeds(LOW); 
        delay(250);
        turnLeds(HIGH);
        delay(250);
        turnLeds(LOW);
        delay(250);
        turnLeds(HIGH);
        delay(250);
        turnLeds(LOW);
        delay(250);
        turnLeds(HIGH);
        delay(250);
        turnLeds(LOW);
    }
    // Print the distances in the serial monitor for maintenance
    Serial.print("Left: ");
    Serial.print(distanceLeft);
    Serial.print(" cm");
    Serial.println();
    Serial.print("Right: ");
    Serial.print(distanceRight);
    Serial.print(" cm");
    Serial.println();
  }
  delay(50); // a little delay for a better functioning
}