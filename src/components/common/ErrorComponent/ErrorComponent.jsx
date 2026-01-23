import {Wrapper, Icon, Title, SubText} from './ErrorComponent.styles'

export default function ErrorComponent() {
  return (
    <Wrapper>
      <Icon />
      <Title>
        We are experiencing heavy traffic
      </Title>
      <SubText variant="body2">
        Please try again later.
      </SubText>
    </Wrapper>
  );
}
