import FlexCenterColumn  from './helperComponents/FlexCenterColumn ';
import Icon from './helperComponents/Icon';
import Title from './helperComponents/Title';
import SubText from './helperComponents/SubText';

export default function ErrorComponent() {
  return (
    <FlexCenterColumn >
      <Icon />
      <Title>
        We are experiencing heavy traffic
      </Title>
      <SubText variant="body2">
        Please try again later.
      </SubText>
    </FlexCenterColumn>
  );
}
