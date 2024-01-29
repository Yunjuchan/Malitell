import ClientForm from "../../../components/auth/signup/client/clientForm";
import ClientText from "../../../components/auth/signup/client/clientText";
import * as g from "../../../styles/grid";

export default function signupClient() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box col="1/13" row="2/5">
          <ClientText />
        </g.Box>
        <g.Box col="1/13" row="5/12">
          <ClientForm />
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}

