import { FiPhone, FiMail } from 'react-icons/fi';
import { SiDiscord } from "react-icons/si";

const contacts = [
	// {
	// 	id: 1,
	// 	name: 'Your Address, Your City, Your Country',
	// 	icon: <FiMapPin />,
	// },
	{
		id: 2,
		name: 'blockyrizz@gamil.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: 'username: blockyrizz',
		icon: <SiDiscord />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
