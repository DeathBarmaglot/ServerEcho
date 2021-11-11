package com.shpp.p2p.cs.ppolyak.LuxCampus.src.ServerEcho.src.main.java.com.luxoft.tdd;

import java.util.HashSet;
import java.util.Set;

public class Hangman {

    private final String word;
    private String maskedWord;
    private int failures;
    private Set<Character> abc= new HashSet<>();


    public Hangman(String word) {
        this.word = word;
        maskedWord = word.replaceAll(".", "_");
    }

    public String getWord() {
        return maskedWord;
    }

    public void guessLetter(char letter) {
        int i = word.indexOf(letter);
        if(i<0){
            if(!abc.contains(letter))
            {failures++;
            abc.add(letter);}
            return;}
        maskedWord = maskedWord.substring(0,i) + letter + maskedWord.substring(i+1);

    }

    public boolean isLost() {
        return failures > 5;
    }

    public boolean isWon() {
        return !maskedWord.contains("_");
    }

    public int getFailCount() {
        return failures;

    }
}
