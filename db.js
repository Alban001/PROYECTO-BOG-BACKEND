import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_jose_cruz',
    password:'#D2AVarNqQ#SZb*',
    database: 'freedb_blog_cruz'
})