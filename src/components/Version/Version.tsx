import userStore from "../../stores/userStore"

const Version: React.FC = () => {
    const version = userStore((state) => state.version)
    const changeVersion = userStore((state) => state.changeVersion)

    // const { version, changeVersion} = userStore()

    return (
        <section>
            <span>{version}</span>
            <button onClick={changeVersion}>Mudar versão</button>
        </section>
    )
}

export default Version