import styled from 'styled-components';

const Icon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const OrgCategoryIcon = styled.div`
  margin-left: ${(props) => (props.category ? '2vh' : '2vh')};
`;

const FilterIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 96%;
  padding: 3vh 0 0 3vw;
`;

const IconBox = styled.div`
  margin-left: 20px;
  margin-top: 10px 0 0 20px;
`;

const CategoryIcon = styled(Icon)`
  margin-left: ${(props) => (props.category ? '1vh' : '1vh')};
  margin: 16px 10px;
`;

export { CategoryIcon, IconBox, FilterIcon, Icon, OrgCategoryIcon };
