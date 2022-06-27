import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directoryItem.style";

function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category;
  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImage imageURL={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
