using System;

namespace guessGame
{
    class Program
    {
        static void Main(string[] args)
        {
            Random r = new Random();
            int randomInt = r.Next(0, 21);
            // Console.WriteLine("Debugging randomInt " + randomInt);
            Console.WriteLine("Welcome to play! Guess which number I have between 0-20. You have only 3 tries!");
            for (int i = 0; i < 3; i++)
            {
                int userInput = int.Parse(Console.ReadLine());
                if (userInput == randomInt)
                {
                    Console.WriteLine("Wow, you did it! That's correct!");
                    break;
                } 
                else if (userInput > randomInt)
                {
                    Console.WriteLine("Sorry, my number is smaller. Guesses left: " + (2 - i));
                }
                else
                {
                    Console.WriteLine("Sorry, my number is bigger. You have " + (2-i) + "guesses left.");
                }
            }

        }
    }
}
