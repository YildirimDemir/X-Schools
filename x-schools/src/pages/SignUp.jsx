import { useState } from "react";
import Button from "../ui/Button";
import LScard from "../ui/LScard";
import PasswordInput from "../ui/PasswordInput";
import TextInput from "../ui/TextInput";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false)

  const isOpenHandler = () => {
    setIsOpen((i) => !i)
  }



  return (
    <div className="sign" style={isOpen ? {backdropFilter: 'brightness(0.6)'}:{}}>
      {isOpen ? 
      <div className="tac-page" >
        <div className="tac-inner">
        <h1>Terms & Conditions</h1>
        <h1 onClick={() => isOpenHandler()} style={{cursor: 'pointer'}}>❌</h1>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit ducimus dolorem incidunt repellat eligendi voluptatum beatae ea! Veniam doloremque hic dolor sunt deleniti iste perspiciatis blanditiis officia soluta quisquam!
        Quaerat illum nesciunt iusto ipsum a? Qui saepe corporis nostrum ea cum dolorum quibusdam officia eaque quia molestiae, recusandae incidunt placeat molestias officiis itaque explicabo nobis nemo quod voluptates fuga?
        Ea, tempore, facilis quod nostrum veniam labore molestiae, fugiat fugit quae pariatur fuga. Nostrum enim aspernatur, eum inventore molestiae explicabo quia eius unde iste reprehenderit labore repellendus nesciunt minima debitis.
        Asperiores, unde porro non, eum dignissimos eveniet quas explicabo velit, corrupti molestias beatae minus officia incidunt deleniti doloremque blanditiis. Alias impedit, officiis earum laborum cupiditate debitis distinctio quas molestias aut!
        Accusantium dignissimos sapiente repellendus deserunt, quam quidem ex beatae impedit rerum a aspernatur tempora, nam consectetur molestiae numquam ea id provident vero culpa odit. Itaque laboriosam optio adipisci inventore temporibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus ratione dolorum praesentium sint quas sapiente, dolores sunt molestias quod facere quisquam laboriosam autem corporis odit neque voluptatem repellat porro.
        Enim labore, voluptatem quam deleniti nam modi, ab voluptate optio,

        officiis inventore explicabo nemo repudiandae sint rerum doloribus exercitationem iusto dolor nesciunt at voluptatum sequi animi consequatur amet illo. Voluptate.
        Id quia tenetur dicta porro omnis enim veritatis, delectus aut amet ipsam, consequuntur praesentium veniam? Tempora hic nemo optio illum aperiam iste consequatur accusamus, eius dolorem blanditiis, vero ut necessitatibus.
        Ex quos sint aspernatur dolores dolorum corporis! Ad beatae dignissimos fugiat vero! Totam quod adipisci consequuntur quae amet. Ullam harum cumque dicta iusto autem corporis est aliquid earum reprehenderit fugit.
        Voluptatibus minus error aut animi id impedit beatae laudantium magnam nesciunt quia harum expedita eveniet veniam, consectetur eaque. Recusandae ullam illo accusantium perspiciatis dolor aliquam maiores veniam, quos possimus excepturi.
        Accusantium eligendi dignissimos ad voluptas? Numquam iure possimus placeat nostrum itaque officia unde fugiat asperiores labore ipsam quasi nobis, vel quaerat doloribus eveniet provident pariatur. Sequi velit rerum consequuntur repellat.
        Amet sit omnis animi excepturi tempora, architecto rerum quo reiciendis? Voluptates ipsam magni quod, neque blanditiis aliquid earum eius optio, fugit itaque tempora, nam eos voluptate modi incidunt iure. Doloremque.
        Nesciunt eos vel dolores consequatur blanditiis neque laborum, architecto perferendis tenetur quisquam minus tempora reprehenderit nihil? Asperiores dignissimos architecto dolor quis. Sed eius eaque possimus, molestiae omnis delectus perspiciatis enim.
        Pariatur, distinctio asperiores voluptates, esse culpa reiciendis repellat perspiciatis est, ipsum sint corporis hic atque cum expedita vel. Neque facere eum at aperiam in obcaecati laborum officiis aspernatur deleniti consequatur.
        Ullam iste, dignissimos quia molestiae temporibus eos! Dolores velit animi fugiat totam, sint cupiditate consequuntur illo, voluptates alias architecto, libero dicta quam atque aliquam rerum optio aspernatur incidunt. Quam, illo?</p>
      </div> 
      : 
      <>
      </>
      }
      <div className="box" style={isOpen ? {filter: 'blur(4px)'}:{}}>
      <div className="inputs inputs2">
        <h1>Hi! 👋</h1>
        <span>Sign Up for learn how to code!</span>
        <div className="ns">
          <TextInput content='🥇' placeholder='Name' />
          <TextInput content='🥈' placeholder='Surname' />
        </div>
        <div className="ns">
          <TextInput content='👾' placeholder='Username' />
          <TextInput content='✉️' placeholder='E-Mail' />
        </div>
        <div className="ns">
          <PasswordInput/>
          <PasswordInput placeholder="Password again"/>
        </div>
        <div className="checkbox2">
        <input type="checkbox" id="i" />
        <label htmlFor="i" className="small-font">I read and agree to <span className="small-font tac" onClick={() => isOpenHandler()}>Terms & Conditions</span></label>
        </div>
        <Button title="Sign Up"/>
        <span className="small-font">I already have an account. <Link to={'/sign-in'}>Sign In</Link> here.</span>
      </div>
      <LScard 
        title='Welcome to XSchool'
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minima?' />
      </div>
    </div>
  )
}