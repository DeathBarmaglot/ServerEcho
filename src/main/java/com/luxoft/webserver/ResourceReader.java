package com.luxoft.webserver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;

public class ResourceReader {

    public String reader(String path) {
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(path);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        StringBuilder result = new StringBuilder();
        int letter;
        while (true) {
            try {
                if ((letter = Objects.requireNonNull(inputStream).read()) == -1) break;
                result.append((char) letter);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        try {
            inputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return String.valueOf(result);
    }
}
