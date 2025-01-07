<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Help Section</title>
    <style id="dynamic-styles"></style>
</head>
<body>
    <div id="help-section"></div>

    <script>
        // Dynamic CSS for styling
        const styles = `
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: auto;
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                text-align: center;
                color: #4CAF50;
            }
            .item {
                margin: 15px 0;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                transition: background 0.3s;
            }
            .item:hover {
                background: #f1f1f1;
            }
            .chat-btn {
                background: #4CAF50;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
            }
            .chat-btn:hover {
                background: #45a049;
            }
        `;

        document.getElementById('dynamic-styles').innerHTML = styles;

        // Dynamic content for the help section
        const helpSection = `
            <div class="container">
                <h2>Help Section</h2>
                <div class="item">
                    <h3>Support</h3>
                    <p>If you need help, please contact our support team.</p>
                </div>
                <div class="item">
                    <h3>Chat with Us</h3>
                    <button class="chat-btn" onclick="openChat()">Start Chat</button>
                </div>
                <div class="item">
                    <h3>Contact Number</h3>
                    <p id="contact-number">Call us directly at: <strong>(123) 456-7890</strong></p>
                </div>
                <div class="item">
                    <h3>Terms and Conditions</h3>
                    <p><a href="#" onclick="showTerms()">View Terms and Conditions</a></p>
                </div>
                <div class="item">
                    <h3>Privacy Policy</h3>
                    <p><a href="#" onclick="showPrivacy()">View Privacy Policy</a></p>
                </div>
            </div>
        `;

        document.getElementById('help-section').innerHTML = helpSection;

        // JavaScript functions for interaction
        function openChat() {
            alert("Chat feature coming soon!");
        }

        function showTerms() {
            alert("Here are the Terms and Conditions...");
            // You can replace this with actual terms content
        }

        function showPrivacy() {
            alert("Here is the Privacy Policy...");
            // You can replace this with actual privacy content
        }
    </script>
</body>
</html>
