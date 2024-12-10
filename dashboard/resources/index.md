---
layout: page
---

<style>
        .resource-wrapper {
            font-family: Arial, sans-serif;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start; /* Align items to the top */
            min-height: 100vh;
            box-sizing: border-box;
            margin-top: 20px; /* Adjust gap from the top of the page */
        }
        .resource-container {
            max-width: 800px;
            width: 100%;
            padding: 20px;
            background-color: #E5E5E5;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
        }
        .search-bar {
            margin-bottom: 20px; /* Gap between search bar and resource list */
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ddd;
            width: calc(100% - 20px); /* Full width minus padding */
            box-sizing: border-box;
        }
        .resource-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            text-align: left; /* Align text to the left */
            box-sizing: border-box;
        }
        .resource {
            display: flex;
            align-items: center;
            gap: 20px;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 8px;
            background-color: #fff;
        }
        .resource img {
            width: 150px;
            height: 150px;
            border-radius: 8px;
            cursor: pointer;
        }
        .resource-details {
            flex: 1;
        }
        .resource-title {
            font-size: 20px;
            margin: 0;
        }
        .resource-description {
            margin: 5px 0 0 0;
            color: #666;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .resource-container {
                padding: 10px;
            }
            .search-bar {
                margin-bottom: 10px; /* Adjust gap for smaller screens */
                padding: 8px;
                width: calc(100% - 16px); /* Adjust width for smaller screens */
            }
            .resource {
                flex-direction: column; /* Stack image and text vertically */
                align-items: flex-start; /* Align items to the left */
                text-align: left; /* Align text to the left */
            }
            .resource img {
                width: 100%;
                height: auto;
                margin-bottom: 10px; /* Add space between image and text */
            }
            .resource-title {
                font-size: 18px; /* Adjust font size for smaller screens */
            }
            .resource-description {
                font-size: 14px; /* Adjust font size for smaller screens */
            }
        }
    </style>
<body>
    <div class="resource-wrapper">
        <div class="resource-container">
            <h1>Available Resources</h1>
            <input type="text" id="search-bar" class="search-bar" placeholder="Search resources...">
            <div class="resource-list" id="resource-list">
                <!-- Resources will be inserted here -->
                Loading...
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>