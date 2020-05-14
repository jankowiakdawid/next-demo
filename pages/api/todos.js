const DB = new Map();

export default (req, res) => {
    if (req.method === 'POST') {
        const todo = JSON.parse(req.body);

        console.log(todo);

        DB.set(DB.size, todo.text);

        res.status(200);

        // res.writeHead(302, {
        //     Location: '/todos',
        // });
        res.end();
    } else if (req.method === 'GET') {
        res.status(200).json([...DB.entries()]);
    }
};
