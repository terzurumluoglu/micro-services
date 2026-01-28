export const HTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Fastify Rest API</title>
    <link rel="icon" href="https://fastify.dev/img/favicon.ico" sizes="any" type="image/svg+xml">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            width: 100vw;
            height: 100vh;
            background-color: #1a1a1a;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        .text-decoration {
            color: #e1e1e1;
            text-decoration: none;
        }

        .w-50-percent {
            width: 50%;
        }
    </style>
</head>

<body>
    <h3 class="text-decoration">Fastify Api is Running...</h3>
    <hr class="w-50-percent">
    <h4>
        <a class="text-decoration" href="v1/docs">Go To V1 Doc</a>
    </h4>
    <h4>
        <a class="text-decoration" href="v2/docs">Go To V2 Doc</a>
    </h4>
</body>

</html>`;
