



router.get('/', (req, res) => {
  res.json({response: 'Looking at questions'});
});

router.post('/', (req,res) => {
  res.json({
    response: 'creating questions',
    body: req.body;
  });
});

router.get('/:qID', (req, res)=> {
  res.json({
    response: `looking at special answer id: ${req.params.qID}`
  });
});

router.post('/:qID/answers', (req, res) => {
  res.json({
    response: 'creating answers',
    question: req.params.qID,
    body: req.body
  });
});

router.put('/:qID/answers/:aID', (req, res) => {
  res.json({
    response: 'editing answers',
    question: req.params.qID,
    answer: req.params.aID,
    body: req.body
  });
});
router.delete('/:qID/answers/:aID', (req, res)=> {
  res.json({
    response: 'deleting answers',
    question: req.params.qID,
    answer: req.params.aID,
    body: req.body
  });
});

router.post('/:qID/answers/:aID/vote-:dec', (req, res)=> {
  res.json({
    response: 'voting on answers',
    question: req.params.qID,
    answer: req.params.aID,
    vote: req.params.dec,
    body: req.body
  });
});
