import styled from "styled-components";



const Wrapper = styled.div`
		width: 100%;
		height:calc(100vh - 13rem);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #E7ECF2;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:end;
	align-items: center;
	width: 320px;
	height: 420px;
	background-color: #ffffff;
	border-radius: 6px;
	box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
	h2{
		margin-bottom: 0;
		padding-bottom: 0;
	}
	.info{
		text-align: center;
		line-height:1;
		margin-bottom: 40px;
	}
	.stats{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width:100%;
		background-color: #F3F6F9;
		border-radius: 0 0 6px 6px;
		border-top:1px solid #E4E9F0;
		div{
			text-align: center;
			line-height:1;
			padding: 24px;
			p{
				margin: 0;
				padding: 0;
				line-height:1.4;
			}
			span{
				font-weight:600;
				font-size:20px;
			}
		}
			div:nth-child(even) {
 			   border-left: 1px solid #E4E9F0;
				 border-right: 1px solid #E4E9F0;
			}

	}
`
const Avatar = styled.img`
	width: 100px;
	height:100px;
	border-radius: 50%;
	border: 1px solid  #E7ECF2;
`


export const Profile = ({ userInfo }) => {
	const { username, tag, location, avatar, stats } = userInfo;
	const { followers, views, likes } = stats;
	return (
		<Wrapper>

			<Container>
				<Avatar src={avatar} />
				<h2>{username}</h2>
				<div className='info'>
					<p>{tag}</p>
					<i>{location}</i>
				</div>
				<div
					className='stats'
				>
					<div>
						<p>Followers</p>
						<span>{followers}</span>
					</div>
					<div>
						<p>Views</p>
						<span>{views}</span>
					</div>
					<div>
						<p>Likes</p>
						<span>{likes}</span>
					</div>
				</div>

			</Container>


		</Wrapper>
	)
}


