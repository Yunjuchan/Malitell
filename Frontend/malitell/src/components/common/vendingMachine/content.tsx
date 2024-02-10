import * as s from '../../../styles/common/vendingMachine/content';
import Card from './card';

interface modalProps {
  contents: string;
}

export default function Content({contents}: modalProps) {
  return (
    <s.Wrapper $display={contents}>
      <Card />
      <Card />
      <Card />
    </s.Wrapper>
  )
}
