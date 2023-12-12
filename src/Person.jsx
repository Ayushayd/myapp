function Person() {
    return (
        <>
        <section className='intro'>
            <h1>Welcome to Bookstore</h1>
            <h3>Here you will find all types of books.</h3>
            {/* <Name />
            <Email />
            <Mobile /> */}
        </section>
        </> // it is called fragment
    );
}
// const Name = () => <h1>Ayush Kumar Gupta</h1>
// function Email() {
//     return <h2>Ayush.abes@gmail.com</h2>
// }

// const Mobile = () => {
//     return <h3>+91 96xxxxxx61</h3>
// }

export default Person;