interface CategoryProps {
  params: {
    new: string;
  };
}

const NewUser = (props: CategoryProps) => {
  const { new: category } = props.params; // Utiliza "new" como alias para evitar conflictos de nombres
  console.log(category);
  return <div>newUser dynamic page: {category}</div>;
};

export default NewUser;
