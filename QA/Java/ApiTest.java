import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.net.http.*;
import java.net.URI;
import java.net.http.HttpRequest.BodyPublishers;

public class ApiTest {

    String baseUrl = "http://localhost:3000/dados";
    HttpClient client = HttpClient.newHttpClient();

    @Test
    public void testGetDados() throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl))
            .GET()
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        assertEquals(200, response.statusCode());
    }

    @Test
    public void testPostDados() throws Exception {
        String json = "{\"nome\":\"Luiz\"}";

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl))
            .header("Content-Type", "application/json")
            .POST(BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        assertEquals(201, response.statusCode());
        assertTrue(response.body().contains("Luiz"));
    }
}
