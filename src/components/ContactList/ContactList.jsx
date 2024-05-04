import Contact from "@/components/Contact/Contact.jsx";

const ContactList = ({
                         contacts,
                         deleteContact
                     }) => {
    return (
        <ul className='flex flex-wrap gap-5 mt-10 w-10/12 mx-auto'>
            {contacts.map((contact) => <Contact key={contact.id}
                                                id={contact.id}
                                                name={contact.name}
                                                number={contact.number}
                                                deleteContact={deleteContact}
            />)}
        </ul>
    );
};
export default ContactList