export default function A() {
    const firstName = "John"
    
    return (
        <div>
            <h1>A</h1>

            <B firstName={firstName} />
        </div>
    )
}