import "./styles.scss";
import Button from "./components/Button";

export function App() {

    return (
        <div className="App">
            <div className="app-welcome">
                <h1>Welcome to Cinema Club</h1>
            </div>

            <Button>join now</Button>
        </div>
    );
}