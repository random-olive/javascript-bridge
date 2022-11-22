const { CONFIG, ENTITY, KEY, WORD, RESULT } = require("./Token");

const SAYS = Object.freeze({
  START: "다리 건너기 게임을 시작합니다." + ENTITY.NEW_LINE,

  RESULT_1: (result) =>
    `${RESULT.MAP} ${ENTITY.NEW_LINE} ${result.map} ${ENTITY.NEW_LINE}${ENTITY.NEW_LINE}`,
  RESULT_2: (result) => `${RESULT.TEXT}: ${result.text} ${ENTITY.NEW_LINE}`,
  RESULT_3: (result) => `${RESULT.TRIAL}: ${result.trial}`,

  END: "다리 건너기 게임을 종료합니다.",
});

const ASKS = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요." + ENTITY.NEW_LINE,
  PLAYER_MOVING:
    ENTITY.NEW_LINE +
    `이동할 칸을 선택해주세요. (위: ${KEY.BRIDGE_UP}, 아래: ${KEY.BRIDGE_DOWN})` +
    ENTITY.NEW_LINE,
  AGAIN:
    `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${KEY.SELECT_RESTART}, 종료: ${KEY.SELECT_QUIT})` +
    ENTITY.NEW_LINE,
});

const ABOUT = Object.freeze({
  // TYPE_NUMBER: "[ERROR] 입력 타입은 숫자여야 합니다.",
  RANGE: `${WORD.ERROR} 입력 숫자 범위는 ${CONFIG.BRIDGE_START} ~ ${CONFIG.BRIDGE_END}이어야 합니다.`,
  BRIDGE_SIZE: `${WORD.ERROR}  입력한 다리 size와 생성된 다리 길이가 일치하지 않습니다.`,
  BRIDGE_ELEMENT: `${WORD.ERROR} 다리 요소는 ${KEY.BRIDGE_UP} 혹은 ${KEY.BRIDGE_DOWN} 여야 합니다.`,
  SELECT_ELEMENT: `${WORD.ERROR} 선택 요소는 ${KEY.SELECT_RESTART} 혹은 ${KEY.SELECT_QUIT} 여야 합니다.`,
});

module.exports = { SAYS, ASKS, ABOUT };
