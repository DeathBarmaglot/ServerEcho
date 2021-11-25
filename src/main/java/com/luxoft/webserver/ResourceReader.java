package com.luxoft.webserver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;

public class ResourceReader implements AutoCloseable {
    InputStream inputStream = null;

    public String reader(String path) {
        StringBuilder result = new StringBuilder();
        int letter;
        try {
            inputStream = new FileInputStream(path);
        } catch (FileNotFoundException e) {
//           e.printStackTrace();
            System.out.println(e);
        }
        while (true) {
            try {
                if ((letter = Objects.requireNonNull(inputStream).read()) != -1) {
                    result.append((char) letter);
                } else {
                    break;
                }
            } catch (NullPointerException | IOException e) {
                result.append("<h1>404</h1>");
                break;

            }

        }

        System.out.println((result));
        return String.valueOf(result);
//        return "<!DOCTYPE html><html><head></head><body><h1>404</h1></body></html>";
    }

    @Override
    public void close() throws Exception {
        inputStream.close();
    }
}
