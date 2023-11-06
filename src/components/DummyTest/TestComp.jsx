import propTypes from 'prop-types';

const MyComponent = ({ name }) => {
    return <div>Hello, {name}!</div>;
};
MyComponent.propTypes = {
    name: propTypes.string,
};
export default MyComponent;
