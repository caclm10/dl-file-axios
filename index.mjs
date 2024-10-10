import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (_, res) => {
    res.render("index");
});

// Ini API untuk send filenya
app.get("/api/download", (_, res) => {

    // Send File
    res.sendFile(`master_code_template.xlsx`, { root: `${process.cwd()}/storage` }, function (err) {
        if (err) {
            console.error("Error sending file:", err);
        } else {
            console.log("Sent:", "master_code_template.xlsx");
        }
    });
})

const get = async ({
    endpoint = "",
    params = {},
    addHeaders = {}
}) => {
    const res = await instance.get(endpoint, {
        ...options,
        headers: { ...instance.defaults.headers, ...addHeaders },
        params
    });

    return res;
}

app.listen(3000, () => {
    console.log("server started on http://localhost:3000");
});