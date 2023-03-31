import { UserType } from "../../stores/userStore"

interface ListProps {
    list: UserType[]
}

const List: React.FC<ListProps> = ({list}) => {
    return (
      <>
        {list?.length > 0 && list.map((item) => (
            <section className="list" key={item.email}>
                <span><strong>Nome:</strong> {item.name}</span>
                <span><strong>Email:</strong> {item.email}</span>
            </section> 
        ))}
      </>
    )
}   



export default List