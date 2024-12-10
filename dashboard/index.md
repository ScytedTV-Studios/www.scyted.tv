---
layout: page
---

<style>
        /* body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        } */
        .dashboard-container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .user-info {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
        }
        .user-info img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 2px solid #ddd;
            margin-right: 20px;
        }
        .user-info h1 {
            margin: 0;
            font-size: 24px;
            color: #444;
        }
        .user-info p {
            color: #666;
        }
        .roles-section {
            margin-top: 20px;
        }
        .roles-section h2 {
            margin-top: 0;
            font-size: 22px;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
            color: #555;
        }
        .role-category {
            margin-bottom: 15px;
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }
        .role {
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 8px;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 15px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .role-name {
            font-size: 16px;
            margin: 0;
        }
        .role-color {
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }
        #logout {
    color: red;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
}
        /* CSS for the button section */
#buttons-wrapper {
    margin-top: 20px;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    background-color: #7289DA; /* Default button color */
    color: #FFFFFF;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
}

.button:hover {
    background-color: #5B6EAE; /* Slightly darker shade on hover */
    color: #FFFFFF;
}
        @media (max-width: 768px) {
            .user-info {
                flex-direction: column;
                align-items: flex-start;
            }
            .user-info img {
                width: 80px;
                height: 80px;
                margin-right: 0;
                margin-bottom: 10px;
            }
            .roles-section h2 {
                font-size: 20px;
            }
            .role {
                padding: 10px;
                font-size: 14px;
            }
        }
    </style>
<body>
    <div class="dashboard-container">
        <div class="user-info">
            <img id="user-avatar" src="" alt="User Avatar">
            <div>
                <h1 id="user-name"></h1>
                <p id="user-id"></p>
                <p id="logout" onclick="logout()">Logout</p>
            </div>
        </div>
        <div class="roles-section">
            <h2>User Roles</h2>
            <div id="roles-list">
                <!-- Roles will be inserted here -->
            </div>
        </div>
    </div>
    
<script src="dashboard.js"></script>
</body>