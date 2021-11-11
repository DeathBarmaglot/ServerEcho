package com.shpp.p2p.cs.ppolyak.LuxCampus.src.ServerEcho.src.main.java.com.luxoft.tdd;

import org.junit.Test;
import static org.junit.Assert.*;

public class HangmanTest {
    Hangman game = new Hangman("sofa");

    @Test
    public void yoeSee() {
        assertEquals("____", game.getWord());
    }

    @Test
    public void youLostStart() {
        assertFalse(game.isLost());
    }

    @Test
    public void yoeMustGuest() {
        game.guessLetter('o');
        assertEquals("_o__", game.getWord());
    }

    @Test
    public void youHaveSixGuesses() {
        game.guessLetter('x');
        game.guessLetter('z');
        game.guessLetter('y');
        game.guessLetter('i');
        game.guessLetter('r');
        assertFalse(game.isLost());
        assertEquals(5, game.getFailCount());
        game.guessLetter('n');
        assertTrue(game.isLost());
    }

    @Test
    public void youWin() {
        game.guessLetter('f');
        game.guessLetter('o');
        game.guessLetter('s');
        game.guessLetter('a');
        assertTrue(game.isWon());
        assertEquals(0, game.getFailCount());
    }

    @Test
    public void multiClick() {
        game.guessLetter('q');
        game.guessLetter('q');
        game.guessLetter('q');
        game.guessLetter('q');
        game.guessLetter('q');
        game.guessLetter('q');
        game.guessLetter('q');
        game.guessLetter('q');
        game.guessLetter('q');

        assertEquals(1, game.getFailCount());
        assertFalse(game.isLost());
        assertFalse(game.isWon());
    }

    @Test
    public void guessLetterReturnFalse() {
        game.guessLetter('i');
        game.guessLetter('r');
        assertEquals(2, game.getFailCount());
    }
}
