import React from 'react';
import Radium from 'radium';

import Subtitle from '../../layout/Subtitle';
import Label from '../../layout/Label';
import Section from '../../layout/Section';
import '../../../styles/littlefoot-default.css';
import { default as littlefoot } from 'littlefoot';

class PostOneContent extends React.Component {
  componentDidMount() {
    littlefoot();
  }
  render() {
    return (
      <div>
        <Subtitle text='peripheral reality*'></Subtitle>
        <br/>
        <Label text='*a contemporary short story'></Label>
        <br/>
        <div className="blog-post-text-area">
          <p>Ding. Canada will pay millions to make amends for forcibly taking indigenous children from their families and putting them up for a… Ding. @haleyscomment and 38 others liked your photo. Ding. You’re almost there! Walk 2,370 more steps to reach your daily goal.</p>
          <p>Anna brushed upwards to dismiss the notifications.
            <sup id="fnref:1">
                <a href="#fn:1" rel="footnote">1</a>
            </sup>
            Three more passive aggressive emails to write before she was able to take a break. “Sorry, Ethan,” she composed to a colleague from the Sydney office, “for possibly being unclear on the call earlier. In the future, would you kindly mind not slurping your takeaway noodles so violently while listening? I wouldn’t mind except to note that it obscures the other voices. Thanks so much in advance.”</p>
          <p>Swoosh.
            <sup id="fnref:2">
                <a href="#fn:2" rel="footnote">2</a>
            </sup>
            One down. It felt pointless to place actual phone calls these days, anyway. She would much rather communicate on Slack or email, where everything could be archived and no-one had to worry about the difference in time-zones. Ding. The Mayor of London, Sadiq Khan,
            <sup id="fnref:3">
                <a href="#fn:3" rel="footnote">3</a>
            </sup>
            will suspend service on all… Ding. @jon_jon replied on your story. Bzzz. @Anais-Yelen requests £2.97 for last night’s uber sorry haha! love ya thankss</p>
          <p>Anna dismissed all of them, rubbed her eyes and opened Tinder. It had been months since she’d been on a proper date (or any kind of date at all). She knew the app wouldn’t necessarily bring her to her soulmate, but three (!) of her girlfriends had recently gotten married. Also, she could tell that her followers thought that 31 was too old to still be posting ironic photos of her dog pretending to sharing her bottle of wine (#whoneedsaman). Were those sorts of posts ever funny? Anna felt hot
            <sup id="fnref:4">
                <a href="#fn:4" rel="footnote">4</a>
            </sup>
             and slightly embarrassed – feeling that at this point, it would be statistically best to swipe right on every guy. Gun lover, fish guy, way-too-religious dude, fine.</p>
          <p>She leant back against the doors of the tube, stumbling a little as the train sped west. The crowd jostled, jockeyed for space. “I don’t know anything anymore,” someone
            <sup id="fnref:5">
                <a href="#fn:5" rel="footnote">5</a>
            </sup>
             said.  </p>
          <p>You don’t need to know anything, anymore, Anna answered in her head as she swiped. It’s all right here. Right, Right, Right. Left. Okay, definitely left. Right. Right. Right. Ri– An sharp elbow flew into her side, thrusting her thumb left. Anna narrowed her eyes, primed to shoot the elbow’s owner
            <sup id="fnref:6">
                <a href="#fn:6" rel="footnote">6</a>
            </sup>
             with a furious scowl.</p>
          <p>Ding. Ethan Musgrove Re: Noodles. She forgot about the elbow and kept her eyes down.</p>
          <div className="footnotes">
            <ol>
              <li className="footnote" id="fn:1">
                <p>Although Anna didn’t read the Times notification about the indigenous children, the man peeking over her shoulder, Alex Okalik, did.<a href="#fnref:1" title="return to article"> ↩</a></p>
              </li>
              <li className="footnote" id="fn:2">
                <p>Alex heard the swoosh as he breathed in, futilely attempting to shrink his six-foot-two frame as others filled every possible inch around him. He thought about his family in Ottawa, his grandmother’s repeated tale of being wrenched from her village. He noticed Anna’s hair, a dark, glistening ginger.<a href="#fnref:2" title="return to article"> ↩</a></p>
              </li>
              <li className="footnote" id="fn:3">
                <p>Hapley, J. The Mayor of London, Sadiq Khan, will suspend service on all westbound lines following explosion. The Guardian. [online] p.1. Available at: http://www.theguardian.com/society/2021/19/oct/explosion-undergroundkhan [Accessed 19 Oct. 2021].<a href="#fnref:3" title="return to article"> ↩</a></p>
              </li>
              <li className="footnote" id="fn:4">
                <p>She’s hot, Alex thought. He imagined her ginger hair on his pillow, considered how to start a conversation.<a href="#fnref:4" title="return to article"> ↩</a></p>
              </li>
              <li className="footnote" id="fn:5">
                <p>Hyland, S. (2021) Telephone conversation with Marianne Hyland, 19 October. “Your father was hurt,” her mother spoke harshly through her tears on the other end of the line. “ Please get off and come home, Sophia.”<a href="#fnref:5" title="return to article"> ↩</a></p>
              </li>
              <li className="footnote" id="fn:6">
                <p>Alex Okalik, six foot two, age 34. Dreamy blue eyes. Interests: Wine, Passive Aggressive Emailing, Dogs. Four friends in common. One meter away.<a href="#fnref:6" title="return to article"> ↩</a></p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

function PostOne() {
  return (
    <div>
      <Section>
        <PostOneContent></PostOneContent>
      </Section>
    </div>
  )
}

// const styles = {
//
// }

export default Radium(PostOne);
