import React from "react";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  buttonClick,
  clearClick,
  spaceClick,
  answerClick,
} from "../actions/CalAction";
import { unique_key } from "../reducers/CalReducer";

const Calculator = () => {
  const dispatch = useDispatch();
  const calculatorVisible = useSelector((state) => {
    return state[unique_key];
  });
  return (
    <div>
      <Flex justifyContent="center">
        <Box
          border={"1px solid black"}
          p="6"
          w="80"
          h="80"
          borderRadius="12"
          bgColor="gray.600"
        >
          <h4 style={{ textAlign: "center", color: "white" }}>
            {" "}
            React-Redux Calculator
          </h4>
          <Input
            type="text"
            value={
              calculatorVisible.ans.length === 0
                ? calculatorVisible.number
                : calculatorVisible.ans
            }
            placeholder="Put load on your brain..."
            bgColor="white"
          ></Input>
          <Flex justifyContent="center" mt="4">
            <Box>
              <Box>
                <Button
                  onClick={() => dispatch(clearClick())}
                  style={{ border: "1px solid black" }}
                >
                  AC
                </Button>
                <Button
                  onClick={() => dispatch(spaceClick())}
                  style={{ border: "1px solid black" }}
                >
                  C
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick("/"))}
                  style={{ border: "1px solid black" }}
                >
                  /
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick("+"))}
                  style={{ border: "1px solid black" }}
                >
                  +
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => dispatch(buttonClick(9))}
                  style={{ border: "1px solid black", width: "55px" }}
                >
                  9
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick(8))}
                  style={{ border: "1px solid black" }}
                >
                  8
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick(7))}
                  style={{ border: "1px solid black", width: "42px" }}
                >
                  7
                </Button>
                <Button
                  onClick={() => dispatch()}
                  style={{ border: "1px solid black", width: "43px" }}
                ></Button>
              </Box>
              <Box>
                <Button
                  onClick={() => dispatch(buttonClick(4))}
                  style={{ border: "1px solid black", width: "55px" }}
                >
                  4
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick(5))}
                  style={{ border: "1px solid black" }}
                >
                  5
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick(6))}
                  style={{ border: "1px solid black", width: "41px" }}
                >
                  6
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick("-"))}
                  style={{ border: "1px solid black", width: "44px" }}
                >
                  -
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => dispatch(buttonClick(1))}
                  style={{ border: "1px solid black", width: "55px" }}
                >
                  1
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick(2))}
                  style={{ border: "1px solid black" }}
                >
                  2
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick(3))}
                  style={{ border: "1px solid black", width: "41px" }}
                >
                  3
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick("*"))}
                  style={{ border: "1px solid black", width: "45px" }}
                >
                  *
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => dispatch(buttonClick("."))}
                  style={{ border: "1px solid black", width: "55px" }}
                >
                  .
                </Button>
                <Button
                  onClick={() => dispatch(buttonClick(0))}
                  style={{ border: "1px solid black" }}
                >
                  0
                </Button>
                {/* <Button style={{ border: "1px solid black" }}>1</Button> */}
                <Button
                  onClick={() => dispatch(answerClick())}
                  style={{ border: "1px solid black", width: "85px" }}
                >
                  =
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Calculator;
